import { API } from '../../../../API'
import { BootOpt } from '../../../../system'

export function webWindow(window: Window, opt: BootOpt): API['window'] {
  const _window = {
    // @ts-ignore
    AudioContext: window.AudioContext,
    // @ts-ignore
    OscillatorNode: window.OscillatorNode,
    // @ts-ignore
    GainNode: window.GainNode,
    // @ts-ignore
    AnalyserNode: window.AnalyserNode,
    // @ts-ignore
    MediaStreamAudioSourceNode: window.MediaStreamAudioSourceNode,
    // @ts-ignore
    DelayNode: window.DelayNode,
    // @ts-ignore
    ImageCapture: window.ImageCapture,
    // @ts-ignore
    CompressionStream: window.CompressionStream,
    // @ts-ignore
    DecompressionStream: window.DecompressionStream,
    // @ts-ignore
    ReadableStream: window.ReadableStream,
    open(url: string, target: string, features: string) {
      return window.open(url, target, features)
    },
  }

  return _window
}
