/**
 * キャンバス要素にお絵描きする
 */
class CanvasDrawer {
    /**
     * コンストラクタ
     *
     * @param {Element} canvas_element キャンバス要素を表すHtmlElement
     */
    constructor(canvas_element) {
        /**
         * @property {CanvasRenderingContext2D} Context2Dオブジェクト
         */
        this.context = canvas_element.getContext('2d');

        this.init();
    }

    /**
     * 初期化を行う
     */
    init() {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.fillStyle = '#000000';
        this.context.strokeStyle = '#000000';
        this.context.lineWidth = 2.0;
        this.context.font = "11pt Arial";
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    }

    /**
     * ストロークと塗りつぶしの色を設定する
     *
     * @param {string} html_color  CSS の <color> 値として解釈される文字列
     */
    color(html_color) {
        this.context.fillStyle = html_color;
        this.context.strokeStyle = html_color;
    }

    /**
     * 引数の座標 (x, y) から width と height のサイズで長方形を描く
     *
     * @param {number} x 開始位置x座標
     * @param {number} y 開始位置y座標
     * @param {number} width 幅
     * @param {number} height 高さ
     */
    rect(x,y,width,height) {
        this.context.beginPath();
        this.context.rect(x, y, width, height);
        this.context.fill();
    }

    /**
     * 引数の座標 (x, y) を中心として、 radiusX と radiusY を半径とする楕円を描く
     *
     * @param {number} x 楕円中心のx座標
     * @param {number} y 楕円中心のy座標
     * @param {number} radius_x 楕円の長辺の半径
     * @param {number} radius_y 楕円の短辺の半径
     */
    oval(x,y,radius_x, radius_y) {
        this.context.beginPath();
        this.context.ellipse(x, y, radius_x, radius_y, 0, 0, Math.PI * 2, false);
        this.context.fill();
    }

    /**
     * 指定した座標(x, y)の一覧を直線で補間して描く
     *
     * @param {bool} fill      trueのときパスを閉じて塗りつぶし色で塗りつぶす
     * @param {number} points  指定座標を直線補間する
     */
    line(fill, points) {
        if (points.length < 4) {
            return;
        }
        if (points.length%2 === 1) {
            return;
        }

        this.context.beginPath();
        this.context.moveTo(points[0], points[1]);
        for (let i = 2; i < points.length; i+=2) {
            this.context.lineTo(points[i], points[i+1]);
        }

        if (fill) {
            this.context.fill();
        } else {
            this.context.stroke();
        }
    }

    /**
     * フォントを設定する
     *
     * @param {number} size サイズ
     * @param {string} name フォント名
     */
    font(size, name) {
        this.context.font = size + "pt " + name;
    }

    /**
     * テキストを描画する
     *
     * @param {number} x x座標
     * @param {number} y y座標
     * @param {string} text テキスト
     */
    text(x, y, text) {
        this.context.fillText(text, x, y);
    }
}
