import { NextApiRequest, NextApiResponse} from 'next';

export default function getAllVehiclesPersonById(req: NextApiRequest, res:NextApiResponse) {
    res.json({byId: req.query.id, message: 'getAllVehiclesPersonById'});
}