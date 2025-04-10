import { Router } from 'express';
import { scoreRoutes } from '../modules/scores/score.route';

type TModuleRoutes = {
  path: string;
  route: Router;
};

const router = Router();

const moduleRoutes: TModuleRoutes[] = [
  {
    path: '/score',
    route: scoreRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
