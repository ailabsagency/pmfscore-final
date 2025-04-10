import { Router } from 'express';
import { ScoreControllers } from './score.controller';

const router = Router();

router.post('/', ScoreControllers.generateScore);

router.get('/:id', ScoreControllers.getSingleGenerateScore);

export const scoreRoutes = router;
