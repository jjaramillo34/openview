import jwt from "jsonwebtoken";
import { spots as Spot } from "../../../../models";
import { users as User } from "../../../../models";

export default async (req, res) => {
    if (!("authorization" in req.headers)) {
        return res.status(401).json({ message: "No autorization token" });
    }

    switch (req.method) {
        case "GET":
            await getSpots(req, res);
            break;

        default:
            res.status(405).send(`Method ${req.method} not allowed`);
            break;
    }
}

const getSpots = async (req, res) => {
    const { userId } = jwt.verify(
        req.headers.authorization,
        process.env.JWT_SECRET
    );

    try {
        const spots = await Spot.findAll({
            where: {
                userId: userId,
            },
            order: [["createdAt", "DESC"]],
        });

        return res.send(spots);
    } catch (error) {
        res.status(500).send("Error in finding Spots, please try again!");
    }
}

