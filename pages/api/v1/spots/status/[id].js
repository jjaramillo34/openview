import { Spots as Spot } from '../../../../models';

export default async (req, res) => {
    switch (req.method) {
        case 'PUT':
            await updateSpotStatus(req, res);
            break;

        default:
            res.status(405).send(`Method ${req.method} not allowed`);
            break;
    }
};

const updateSpotStatus = async (req, res) => {
    const { status } = req.query;
    try {
        const spot = await Spot.findByPk(req.query.id);

        if (spot.status === 'active') {
            spot.status = 'pending';

            await spot.save();
            const updatedSpot = await Spot.findAll({
                where: {
                    status: status,
                },
                order: [['createdAt', 'DESC']],
            });
            res.json(updatedSpot);
        } else if (spot.status === 'pending') {
            spot.status = 'active';

            await spot.save();
            const updatedSpot = await Spot.findAll({
                where: {
                    status: status,
                },
                order: [['createdAt', 'DESC']],
            });

            const activeSpots = await Spot.findAll({
                where: {
                    status: 'active',
                },
                order: [['createdAt', 'DESC']],
            });

            const pendingSpots = await Spot.findAll({
                where: {
                    status: 'pending',
                },
                order: [['createdAt', 'DESC']],
            });

            res.json({ updatedSpot, activeSpots, pendingSpots });
        } else {
            res.status(404);

            throw new Error('Spot not found');
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};