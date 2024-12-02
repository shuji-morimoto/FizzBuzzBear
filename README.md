# FizzBuzzBear

FizzBuzz問題をアニメーションを用いて実行するJavascriptです。また、APIリファレンスや
ドキュメンテーションも生成するためNode.jsを利用します。

## Node.jsのインストール

[Node.js](https://nodejs.org/en/download/prebuilt-installer)をインストールしてください。

### ドキュメント生成ツールのインストール

以下のコマンドを実行して必要な開発モジュールをインストールします。

**注意**

Windows PowerShellだとスクリプト実行エラーとなるようです。Windowsではコマンドプロンプト(cmd.exe)やGit Bash(bash.exe)を利用してください。

また、IPv6環境ではスクリプトのダウンロードが進まないようですので `set NODE_OPTIONS="--dns-result-order=ipv4first"` でIPv4を優先するように指定します。

```console
cd FizzBuzzBear
set NODE_OPTIONS="--dns-result-order=ipv4first"
npm install
```


実行すると`package.json` に記述されているパッケージが `node_modules` にインストールされます。

|パッケージ|バージョン|説明|
|----------|----------|----|
|jsdoc|4.0.3|API・設計ドキュメント生成|
|docdash   | 2.0.2|jsdoc用テンプレート|
|その他のパッケージ| |上記パッケージが依存するパッケージ|


また `package.json` にスクリプトを記述することでそのスクリプトを実行することができます。

```console
npm run スクリプト名
```

|スクリプト名|説明|
|----------|----|
|docs|API・設計ドキュメント生成する|


## ドキュメント生成

APIドキュメント(Javascriptコード)とソフトウェア設計書(Markdown文書)を生成するには以下を実行します。

```console
npm run docs
```

生成されたドキュメントは [ここ](docs/_site/index.html) から参照することができます。
