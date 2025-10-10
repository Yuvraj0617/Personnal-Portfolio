import dotenv from "dotenv";
dotenv.config();
import Express from "express";
import cors from "cors";
import connectdb  from "./database/dbconnect.db.js"; 
import overviewRoutes  from "./routes/overview.route.js";
import EducationRoutes from "./routes/education.route.js";
import ProjectRoutes from "./routes/project.route.js";
import HomeRoutes from "./routes/home.route.js";
import authRoutes from "./routes/login.route.js";
import CookieParser from 'cookie-parser'
const app = Express(); 

connectdb();
app.use(Express.json());
app.use(cors(
    {
        origin: [process.env.Frontend_URL, "https://yubraj-sapkota-fxoo.onrender.com", "http://localhost:5173"],
        credentials: true
    }
));
app.use(CookieParser());

app.use("/api/admin/overview", overviewRoutes);
app.use("/api/admin/education", EducationRoutes);
app.use("/api/admin/projects", ProjectRoutes);
app.use("/api/",HomeRoutes);
app.use("/api/auth", authRoutes);

export default app;
