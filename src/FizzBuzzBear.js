/**
 * FizzBuzz問題を解くクマ
 */
class FizzBuzzBear {

    /**
     * アニメーションを開始する
     */
    static animation() {
        let bear = new FizzBuzzBear();
        bear.draw();
    }

    /**
     * コンストラクタ
     */
    constructor() {
        /**
         * @property {CanvasDrawer} お絵描きオブジェクト
         *
         * Canvas要素を元にオブジェクトを生成する
         */
        this.drawer = new CanvasDrawer(document.getElementById("drawer-canvas"));

        /**
         * @property {number} 前回の経過時間
         *
         * 描画速度調整のため前回の経過時間を保持する &#091;msec&#093;
         */
        this.pre_time = -9999;

        /**
         * @property {number} 待ち時間
         *
         * 再描画するまでの待ち時間 &#091;msec&#093;
         */
        this.wait_time = 1000;

        /**
         * @property {number} 描画回数
         *
         * 描画処理で利用する
         */
        this.count = 1;

        /**
         * @property {number} ランダム値生成範囲
         *
         * ランダム値を返す際の最大値を設定する。大きすぎると描画が崩れるので注意
         */
        this.range = 5;
    }

    /**
     * クマを描画する
     *
     * いわゆるFizzBuzz問題の実装
     *
     * ・数え上げた数字が3の倍数のとき口を開けて笑う<br>
     * ・数え上げた数字が5の倍数のときウインクする<br>
     */
    draw() {
        let animation = (time) => {
            if (time < this.pre_time + this.wait_time) {
                window.requestAnimationFrame(animation);
                return;
            }

            // 背景
            this.drawer.color("#ffffff");
            this.drawer.rect(0,0,200,200);
            this.drawer.color("#77ff88");
            this.drawer.rect(5+this.r(),5+this.r(),185+this.r(),185+this.r());

            // 耳
            this.drawer.color("#663300");
            this.drawer.oval(60+this.r(),70+this.r(),28+this.r(),28+this.r());
            this.drawer.oval(140+this.r(),70+this.r(),28+this.r(),28+this.r());
            this.drawer.color("#000000");
            this.drawer.oval(60+this.r(),70+this.r(),18+this.r(),18+this.r());
            this.drawer.oval(140+this.r(),70+this.r(),18+this.r(),18+this.r());

            // 顔
            this.drawer.color("#663300");
            this.drawer.oval(100+this.r(),100+this.r(),62+this.r(),52+this.r());

            // 鼻口部
            this.drawer.color("#996633");
            this.drawer.oval(100+this.r(),120+this.r(),30+this.r(),25+this.r());
            
            // 目
            this.drawer.color("#000000");
            this.drawer.oval(80+this.r(),85+this.r(),5+this.r(),5+this.r());

            if (this.count % 5 == 0) {
                this.drawer.line(false,[110+this.r(),85+this.r(),120+this.r(),78+this.r()]);
                this.drawer.line(false,[110+this.r(),85+this.r(),122+this.r(),85+this.r()]);
                this.drawer.line(false,[110+this.r(),85+this.r(),120+this.r(),92+this.r()]);
            } else {
                this.drawer.oval(120+this.r(),85+this.r(),5+this.r(),5+this.r());
            }

            // 鼻
            this.drawer.oval(100+this.r(),110+this.r(),8+this.r(),8+this.r());

            // 口
            if (this.count % 3 == 0) {
                this.drawer.color("#ae0000");
                this.drawer.line(true,[80+this.r(),125+this.r(),95+this.r(),135+this.r(),105+this.r(),135+this.r(),120+this.r(),125+this.r()]);
            } else {
                this.drawer.color("#000000");
                this.drawer.line(false,[100+this.r(),115+this.r(),90+this.r(),125+this.r(),85+this.r(),125+this.r(),75+this.r(),120+this.r()]);
                this.drawer.line(false,[100+this.r(),115+this.r(),110+this.r(),125+this.r(),115+this.r(),125+this.r(),125+this.r(),120+this.r()]);
            }

            // くま
            this.drawer.color("#000000");
            this.drawer.font(22+this.r(), "Arial");
            this.drawer.text(70+this.r(),185+this.r(),"く");
            this.drawer.font(22+this.r(), "Arial");
            this.drawer.text(100+this.r(),185+this.r(),"ま");

            // カウント
            this.drawer.color("#dddddd");
            this.drawer.oval(40,20,40,16);
            this.drawer.line(true,[10,30,50,50,30,30]);
            this.drawer.color("#000000");
            this.drawer.font(12,"monospace");
            this.drawer.text(25,24,this.count);

            // ステータス更新
            this.pre_time = time;
            this.count++;

            window.requestAnimationFrame(animation);
        }
        window.requestAnimationFrame(animation);
    }

    /**
     * 0からrangeで指定した範囲でランダムな整数を返す
     *
     * @returns {number} 整数
     */
    r() {
        return Math.floor(Math.random() * this.range); 
    }
}
