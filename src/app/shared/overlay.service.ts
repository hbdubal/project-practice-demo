import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';

@Injectable()
export class OverlayService {

  constructor(private overlay:Overlay) { }

  openDialog(component:any)
  {
    let positionStrategy=this.overlay.position().global().centerHorizontally().centerVertically();
    const overlayRef=this.overlay.create({
      positionStrategy,
      backdropClass:'backdropClass',
      hasBackdrop:true,
      panelClass:'panelClass'
    });
    const empFormOverlay=new ComponentPortal(component);
    overlayRef.attach(empFormOverlay);

    overlayRef.backdropClick().subscribe(()=>
    {
      overlayRef.detach();
    })
  }
}
