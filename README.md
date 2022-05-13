# expo-sdk-43

### Install

```
yarn
```

### Build internal distribution (without testflight)

You need to change `release-channel` at `eas.json`
```
"production": {
  "releaseChannel": "RELEASE_CHANNEL_YOU_WANT",
  "cache": {
    "key": "RELEASE_CHANNEL_YOU_WANT"
  },
  "distribution": "internal"
}
```

And run build
```
eas build --platform ios
```

And follow steps that `eas` provides you to add new devices etc. You will need to scan QR code to add your iOS device
to be able to test this distribution
