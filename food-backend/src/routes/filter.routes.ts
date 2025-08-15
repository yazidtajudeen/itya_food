import { Router } from "express";
import { getMenuFilterOptions, resetMenuFilters } from "../controllers/filter.controller";

const router = Router();

router.get('/menu/filters', getMenuFilterOptions);
router.get('/menu/filters/reset', resetMenuFilters);

export default router; 