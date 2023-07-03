import jwt from "jsonwebtoken";
import { spots as Spot } from "../../../../models";
import { users as User } from "../../../../models";
const { Op } = require("sequelize");

export default async (req, res) => {
    switch (req.method) {
        case "GET":
            await getSpots(req, res);
            break;

        case "POST":
            await createSpots(req, res);
            break;

        case "PUT":
            await updateSpots(req, res);
            break;

        default:
            res.status(405).send(`Method ${req.method} not allowed`);
            break;
    }
}

const getSpots = async (req, res) => {

    const { page, limit } = req.query;

    const currentPage = page ? page : 1;
    const perPage = limit ? +limit : 6;
    let offset = 0;
    if (currentPage > 1) {
        offset = currentPage * perPage - perPage;
    }

    try{
        let totalSpots, spots;
        if(req.query.status){
            totalSpots = await Spot.count({
                where: {
                    status: req.query.status
                }
            });
            spots = await Spot.findAll({
                order: [["createdAt", "DESC"]],
                where: {
                    status: req.query.status
                },
                limit: perPage,
                offset: offset
            });
        } else if(req.query.keyword){
            totalSpots = await Spot.count({
                where: {
                    title: { [Op.iLike]: `%${req.query.keyword}%` },
                    status: "active",
                },
            });
            spots = await Spot.findAll({
                where: {
                    title: { [Op.iLike]: `%${req.query.keyword}%` },
                    status: "active",
                },
                order: [["createdAt", "DESC"]],
                offset: offset,
                limit: perPage,
            });
        }
        else{
            totalSpots = await Spot.count(
                { where: { status: "active" } },
            );
            spots = await Spot.findAll({
                order: [["createdAt", "DESC"]],
                offset: offset,
                limit: perPage,
            });
        }
        const totalPages = Math.ceil(totalSpots / perPage);
        res.send({ spots, totalPages });
    } catch(error){
        res.status(500).send("Error in getting spots, please try again!" + error);
    }
}


