  module.exports.setup = (app) => {
    /**
   * @swagger
   * /api/healthcheck:
   *   get:
   *     summary: Healthcheck for the application 
   *     description: Returns a Response for the HealthCheck
   *     responses:
   *       200:
   *         description: OK
   *     tags:
   *      - Health
   */

 app.get('/api/healthcheck', function (req, res) {
    console.log('HealthCheck Called');
    const healthcheck = {
          uptime: process.uptime(),
          message: 'OK',
          timestamp: Date.now()
      };
      try {
          res.send(healthcheck);
      } catch (e) {
          healthcheck.message = e;
          res.status(503).send();
      }
    });
 };
  