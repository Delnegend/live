
const player = OvenPlayer.create('player_id', {
  sources: [
    {
      label: 'HLS',
      type: 'hls',
      file: 'https://stream.delnegend.com/app/stream/playlist.m3u8'
    }
  ]
});