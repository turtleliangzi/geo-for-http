/**
 * Created by zhongyufei on 2016/4/26.
 */
import '../static/css/app.less';

// import geo from '../../src/geo';
import geo from '../../lib/geo';

let appTemplate = require("../tmpl/appTemplate.tpl");

let App = {

    $el: $("#app"),//如不引入zepto，需修改为原生选择器

    appTemplate: appTemplate,

    init () {
        this.render();

        geo.register();

        geo.getCurrentPosition('ali')
        .then(pos => {
            let html = `<p>lat: <span>${pos.lat}</span></p><p>lng: <span>${pos.lng}</span></p><p>maptype: <span>${pos.maptype}</span></p>`
            document.getElementById('amap').innerHTML = html;
        });

        geo.getCurrentPosition('baidu')
        .then(pos => {
            let html = `<p>lat: <span>${pos.lat}</span></p><p>lng: <span>${pos.lng}</span></p><p>maptype: <span>${pos.maptype}</span></p>`
            document.getElementById('bmap').innerHTML = html;
        })
        geo.getCurrentPosition('qq')
        .then(pos => {
            let html = `<p>lat: <span>${pos.lat}</span></p><p>lng: <span>${pos.lng}</span></p><p>maptype: <span>${pos.maptype}</span></p>`
            document.getElementById('qqmap').innerHTML = html;
        });
        geo.getCurrentPosition('h5')
        .then(pos => {
            let html = `<p>lat: <span>${pos.lat}</span></p><p>lng: <span>${pos.lng}</span></p><p>maptype: <span>${pos.maptype}</span></p>`
            document.getElementById('html5').innerHTML = html;
        })

    },

    render (data) {
        let me = this;
        me.$el.html(me.appTemplate());
    }

};

App.init();