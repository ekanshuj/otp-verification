import initMB from 'messagebird';
const messagebird = initMB(process.env.BIRD_KEY)


class userControllers {
  static createOTP = (req, res) => {
    const { number } = req.body;
    const otpNumber = "+91" + number;

    const params = {
      template: 'Your otp for the messagebird verification is %token',
      timeout: 30,
    }

    messagebird.verify.create(otpNumber, params,
      (err, response) => {
        console.log(err);
        err
          ? res.status(401).json({ "status": "failed", "message": "OTP not sent", "error": err })
          : res.status(200).json({ "status": "success", "message": "OTP not sent" })
        console.log(response);
      });
  }

  static verifyOTP = (req, res) => {
    const { id, code } = req.body;

    messagebird.verify.verify(id, code,
      (err, response) => {
        console.log(err);
        err
          ? res.status(401).json({ "status": "failed", "message": "Wrong Credentials", "error": err })
          : res.status(200).json({ "status": "success", "message": "OTP verified successfully" })
        console.log(response);
      });

  }
}

export default userControllers;