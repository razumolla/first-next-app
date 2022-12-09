import Users from '../../../allUsers';

export default function handler(req, res) {
    res.status(200).json(Users)
}