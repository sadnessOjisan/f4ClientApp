# Tippy Client Side

店舗と顧客を感謝で繋ぐサービス Tippy. [eastgate](https://www.eastgate.tokyo/)用のクライアントサイドのアプリケーションレポジトリ. カスタマーサイドは[こちら](https://github.com/sadnessOjisan/f4CustomerApp)

[![Netlify Status](https://api.netlify.com/api/v1/badges/b5b7510e-30f0-4c0a-90ce-38d0db9ba788/deploy-status)](https://app.netlify.com/sites/f4cl/deploys)

## 起動

### local

```
$ yarn install

// DBセットアップ
$ yarn run mock:local

$ yarn run start:local
```

### prd

環境変数に `REACT_APP_ENV=propduction` をセット

```
$ yarn run build:prd
```

## 開発

CD は Netlify にて、レポジトリへの push を hook している.
