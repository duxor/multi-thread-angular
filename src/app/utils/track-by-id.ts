import { TrackByFunction } from '@angular/core';
import { Output } from 'src/app/models/output';

export const trackById: TrackByFunction<Output> = (
  index: number,
  item: Output
): number => {
  return item.id;
};
