"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = require("path");
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)({
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express_1.default.json());
// app.get('/', (req: Request, res: Response) => {
//   res.send({
//     respones: "Hello",
//   });
// });
app.use(express_1.default.static('static'));
app.get('/', (req, res) => {
    res.sendFile((0, path_1.resolve)(__dirname, 'pages/index.html'));
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
