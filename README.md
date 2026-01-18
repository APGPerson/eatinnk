# eatinnk

## Created by APGPerson

## Follow MIT LICENSE

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

# data.json format

```json5
{
  "days": [
    "2025-1-1", // Use ISO8601
    ...
  ],
  "detail":{
    "north": [
      [ // one days menu
        [], // Window menu
        ...
      ],
      ...
    ],
    "south": [...]
  }
}
```