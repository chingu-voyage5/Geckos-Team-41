import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send({ success: true });
});

export const ExampleController: Router = router;
