import { Sticker } from '@airgram/core'

/** A dice message. The dice value is randomly generated by the server */
export class MessageDiceBaseModel {
  public _: 'messageDice'

  /**
   * The animated sticker with the initial dice animation; may be null if unknown. updateMessageContent
   * will be sent when the sticker became known
   */
  public initialStateSticker?: Sticker

  /**
   * The animated sticker with the final dice animation; may be null if unknown. updateMessageContent
   * will be sent when the sticker became known
   */
  public finalStateSticker?: Sticker

  /** Emoji on which the dice throw animation is based */
  public emoji: string

  /** The dice value. If the value is 0, the dice don't have final state yet */
  public value: number

  /**
   * Number of frame after which a success animation like a shower of confetti needs to
   * be shown on updateMessageSendSucceeded
   */
  public successAnimationFrameNumber: number
}
