import {generateEmailContent, transporter} from "../../../lib/nodemailer";
import {NextRequest} from "next/server";
import {NextApiResponse} from "next";

export type ContactRoutePayload = {
    response?: string;
    success?: boolean;
};


export async function POST(req: NextRequest, res: NextApiResponse) {
    try {
        const request = await req.json();
        const data = request.body;
        if (!data.email || !data.name || !data.subject || !data.message) {
            return res.status(400).send({
                response: "Bad data request",
                success: false,
            });
        }
        // console.log("nodemailer POST data ", JSON.stringify(data));
        // const options = mailOptions(data);
        const sendMailResult = await transporter.sendMail({
            from: process.env.MAIL_USER,
            to: process.env.MAIL_USER,
            ...generateEmailContent(data),
            subject: data.subject,
        });

        console.log("response nodemailer ", sendMailResult);

        return res.status(200).json({
            response: `Email sent successfully,response: ${sendMailResult.response}`,
            success: true,
        });
    } catch (error: any) {
        console.log(error);
        return res.status(500).json({
            response: `Error sending email, message: ${error.message}`,
            success: false,
        });

        // } else {
        // Handling non-POST requests
        //   NextResponse.setHeader("Allow", ["POST"]);
        //   NextResponse.status(405).end(`Method ${req.method} Not Allowed`);
        // }
    }
}