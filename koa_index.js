const koa = require('koa');
const koaRouter = require('koa-router');

const app = new koa();
const router = new koaRouter();

router.get('index', '/', (context) =>{
    context.type = 'html';
    context.body = "<h1>INDEX SAYFASINA HOSGELDINIZ.</h1>"
});

router.get('about', '/about', (context) =>{
    context.type = 'html';
    context.body = "<h1>ABOUT SAYFASINA HOSGELDINIZ.</h1>";
});

router.get('contact', '/contact', (context) =>{
    context.type = 'html';
    context.body = "<h1>CONTACT SAYFASINA HOSGELDINIZ.</h1>";
});

// response
app.use(router.routes()).use(router.allowedMethods());

const port = 3000;
app.listen(port);