"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const projectFromRoutes_1 = require("./Routes/projectFromRoutes");
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true })); //for default form type 
app.use('/api', projectFromRoutes_1.ProjectFormRoutes);
app.use(express_1.default.static('dist/public'));
app.get("*", (req, res) => {
    res.send(path_1.default.join(__dirname, 'dist/public/index.html'));
});
app.listen(PORT, () => {
    console.log(`app is running at http://localhost:${PORT}`);
});
