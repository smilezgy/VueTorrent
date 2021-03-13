import { formatBytes } from '@/helpers'

export class DocumentTitle {
  static setDefault() {
    this.set('VueTorrent')
  }

  static setGlobalSpeed(speeds) {
    if (!speeds || speeds.length !== 2) return
    this.set(`[D: ${formatBytes(speeds[0])}/s, U: ${formatBytes(speeds[1])}/s] VueTorrent`)
  }

  static setFirstTorrentStatus(torrent) {
    if (!torrent) return
    this.set(`[D: ${formatBytes(torrent.dlspeed)}/s, U: ${formatBytes(torrent.upspeed)}/s] ${torrent.progress}%`)
  }

  static updateTitle(mode, speeds, torrent) {
    if (!mode || !speeds.length || !torrent) return
    switch (mode) {
      case 'Default':
        return this.setDefault()
      case 'Global Speed':
        return this.setGlobalSpeed(speeds)
      case 'First Torrent Status':
        return this.setFirstTorrentStatus(torrent)
      default:
        return this.setDefault()
    }
  }

  static set(title) {
    document.title = title
  }
}