const iosSign = {
    mobileprovision: '',
    signName: '',
    enable: 'ON',  // ON: 開啟 OFF:關閉 index.html不輸入則為ON
    createDOM: function() {

        if (this.enable === 'OFF' || this.enable === '') {
            console.log('enable is set to OFF');
            big_img.style.marginTop = 0;
            return false;
        }
        if (this.mobileprovision === '') {
            console.log('You must to set iOS mobileprovision.');
            return false;
        }
        if (this.signName === '') {
            console.log('You must to set iOS sign name.');
            return false;
        }
        if (!!document.getElementById('top_bar') !== false) {
            console.log('Already created.');
            return false;
        }

        let view = `
<div id="top_bar" class="fade-in top fixed-top">
<div style="padding:5px;">
<img src="style/img/setting.png" style="display: inline-block;width: 40px;height: 40px;vertical-align: middle;">
<p id="name">${this.signName}</p>
<div id="btn">
</div>
</div>
<div class="bottom-div">
<span class="center">请在游戏下载安装完成后进行验证</span>
</div>
</div>	  
`;
        document.body.innerHTML = view + document.body.innerHTML;
        this.onScroll();
        btn.onclick = function (){location.href = iosSign.mobileprovision;}
        console.log('created');

        return this;
    },
    createStyle: function() {
        let style = `
<style>
@keyframes fadeIn {
from {opacity: 0;}
to {opacity: 1;}
}

.fade-in{
animation: fadeIn .25s forwards;
}

.fixed-top {position: fixed;top:0;left:5px;right:5px;z-index: 999;}
#top_bar {background-color: #3a3a3a;}
.top{margin:-5px;padding-top: 5px;}
.bottom-div{text-align: center;padding-bottom: 5px;}
span.center {background-color: white;border-radius: 5px;padding: 1px 10px;}

#btn {display: inline-block;position: absolute;top: 18%;right: 10px;width: 80px !important;height: 40px !important; background: url("style/img/auth_btn.png") no-repeat;background-size: contain;cursor:pointer;z-index: 9999}
#name {display: inline-block;white-space: nowrap;text-overflow:ellipsis;margin:0 auto;vertical-align: middle;overflow: hidden;width: 60%; color:white}
</style>`;
        document.head.innerHTML = document.head.innerHTML + style;

        return this;
    },
    onScroll: function () {
        window.addEventListener('scroll', function (event) {
            console.log('scrolled',document.body.scrollTop);
            if (document.body.scrollTop > 80) {
                console.log('change to another color');
            }
            else {
                console.log('set to default color');
            }
        });
    },

};
