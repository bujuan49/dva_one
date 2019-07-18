import dva from 'dva';
import './index.scss';
import 'antd/dist/antd.css';
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/login').default);
app.model(require('./models/subject').default);
app.model(require('./models/user').default);
app.model(require('./models/global').default);
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
