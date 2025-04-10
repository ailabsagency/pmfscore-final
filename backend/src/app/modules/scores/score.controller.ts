import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ScoreServices } from './score.service';
import httpStatus from 'http-status';

const generateScore = catchAsync(async (req, res) => {
  const result = await ScoreServices.generateScore(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Score created successfully!',
    data: result,
  });
});

const getSingleGenerateScore = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await ScoreServices.getSingleGenerateScore(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Score retrieved successfully!',
    data: result,
  });
});

export const ScoreControllers = {
  generateScore,
  getSingleGenerateScore,
};
