
layui.use('element', function () {
    var element = layui.element,
        layer = layui.layer;
    var index = layer.load(1, {
        shade: [0.5, '#fff']
    }); //0.1透明度的白色背景
    window.onload = function () {
        layer.close(index)
    };
    //欢迎信息
    layer.msg('hello,你好，如果你会编程有恰好没有工作室，请加入我们这个集体吧！')
    //一些事件触发
});


function messagebox(url) {
    layui.use('layer', function () {
        var layer = layui.layer;
        //欢迎信息
        //一些事件触发
        layer.open({
            type: 2,
            area: ['1200px', '800px'],
            fixed: false, //不固定
            maxmin: true,
            content: url
        });
    });
};
function messagebox(url) {
    layui.use('layer', function () {
        var layer = layui.layer;
        //欢迎信息
        //一些事件触发
        layer.open({
            type: 2,
            area: ['1200px', '800px'],
            fixed: false, //不固定
            maxmin: true,
            content: url
        });
    });
};