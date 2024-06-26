import Phaser from "phaser";

export interface ICamera {
  /**
   * Start following object.
   */
  focusOn(object: Phaser.GameObjects.Sprite): void;

  /**
   * Start following level.
   */
  focusOnLevel(): void;

  /**
   * Shake effect.
   */
  shake(): void;

  /**
   * Zoom out effect.
   */
  zoomOut(): void;

  /**
   * Add zoom control.
   */
  addZoomControl(): void;

  /**
   * Focus on map center and zoom out.
   */
  focusOnMapCenterAndZoomOut(): void;
}
