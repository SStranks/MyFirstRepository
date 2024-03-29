import { Request, Response } from 'express';
import rateLimit from 'express-rate-limit';
import Rollbar from 'rollbar';

const rollbarClient = async (req: Request) => {
  // NOTE:  Typescript has no type yet for fetch
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  fetch('https://api.rollbar.com/api/1/item/', {
    method: 'POST',
    body: JSON.stringify(req.body),
    headers: {
      'Content-Type': 'application/json',
      'X-Rollbar-Access-Token': `${process.env.ROLLBAR_POST_CLIENT_ITEM}`,
    },
  })
    .then((res: Response) => res.json())
    .then((json: JSON) => console.log(json))
    .catch((error: Error) => console.log(error));
};

const rollbarConfig: Rollbar.Configuration = {
  enabled: !!process.env.ROLLBAR_ENABLED,
  accessToken: process.env.ROLLBAR_POST_SERVER_ITEM,
  environment: process.env.NODE_ENV,
  captureUncaught: true,
  captureUnhandledRejections: true,
};

const rollbarServer = new Rollbar(rollbarConfig);

const rollbarRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // Limit each IP to 5 create account requests per `window` (here, per hour)
  standardHeaders: false, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

export { rollbarClient, rollbarRateLimit, rollbarServer };
