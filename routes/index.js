import routerx from 'express-promise-router';
import cobradoresRouter from './cobrador';

const router=routerx();

router.use('/cobradores', cobradoresRouter);
export default router;



