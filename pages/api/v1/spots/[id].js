import jwt from 'jsonwebtoken';
import { spots as Spot } from '../../../../models';
import { users as User } from '../../../../models';

export default async (req, res) => {
    switch (req.method) {
        case 'GET':
            await getSpot(req, res);
            break;

        case 'DELETE':
            await deleteSpot(req, res);
            break;

        default:
            res.status(405).send(`Method ${req.method} not allowed`);
            break;
    }
}

const getSpot = async (req, res) => {
    try {
        const spot = await Spot.findByPk(req.query.id);
        res.json(spot);
    } catch (error) {
        res.status(500).send('Error in gettng single Spot, please try again!' + error);
    }
}


const deleteSpot = async (req, res) => {
    const { status, id } = req.query;
    const { userId } = jwt.verify(
        req.headers.authorization,
        process.env.JWT_SECRET
    );
    try {
        const user = await User.findOne({
            where: { id: userId },
        });

        await Spot.destroy({
            where: {
                id: id,
            },
        });

        if (user.role === 'admin') {
            const adminSpots = await Spot.findAll({
                order: [['createdAt', 'DESC']],
                where: {
                    status: status,
                },
                limit: 6,
            });

            const adminActiveSpots = await Spot.findAll({
                order: [['createdAt', 'DESC']],
                where: {
                    status: 'active',
                },
                limit: 6,
            });

            const adminPendingSpots = await Spot.findAll({
                order: [['createdAt', 'DESC']],
                where: {
                    status: 'pending',
                },
                limit: 6,
            });

            return res.status(200).json({
                message: 'Spot deleted successfully',
                adminSpots,
                adminActiveSpots,
                adminPendingSpots,
            });
        } else {
            const spots = await Spot.findAll({  
                where: {
                    userId: userId,
                },
                order: [['createdAt', 'DESC']],
                limit: 6,
            });

            const activeSpots = await Spot.findAll({
                where: {
                    userId: userId,
                    status: 'active',
                },
                order: [['createdAt', 'DESC']],
                limit: 6,
            });

            const pendingSpots = await Spot.findAll({
                where: {
                    userId: userId,
                    status: 'pending',
                },
                order: [['createdAt', 'DESC']],
                limit: 6,
            });

            return res.status(200).json({
                message: 'Spot deleted successfully',
                spots,
                activeSpots,
                pendingSpots,
            });
        }
    } catch (error) {
        res.status(500).send('Error in deleting Spot, please try again!');
    }
};
