# nodecg-browse-livesplit

## Install

GitHubの[リリースページ](https://github.com/cma2819/nodecg-browse-livesplit/releases)からzipをダウンロードしてください.

## Usage

ダウンロードしたzipを解凍し、`start.sh` か `start.bat` を起動します.

OBS等のブラウザソースで、`http://localhost:9090/bundles/nodecg-browse-livesplit/graphics/index.html` を表示すると, `localhost:16834` で起動したLiveSplit Serverのタイムが表示されます.

- [LiveSplit Server](https://github.com/LiveSplit/LiveSplit.Server)

## Custom Style

デフォルトの状態ではただのテキストが表示されるだけです. OBS等のカスタムCSSで独自にスタイルを当てることを想定しています.

表示されるHTMLは以下の仕様に従います. これに則ってスタイルを当ててください.

``` html
  <div class="root">
    <div
      v-if="currentTime !== null"
      class="time"
    >
      <span
        v-if="currentTime.day"
        class="day">
          {{ day }}d
        </span>
      <span class="hour">
        {{ hour }}:
      </span>
      <span class="minute">
        {{ minute }}:
      </span>
      <span class="second">
        {{ second }}
      </span>
    </div>
  </div>
```

## example

https://twitter.com/cma2819/status/1391361558215761921?s=20