import {
   Component,
   ViewChild,
   ElementRef,
   AfterViewInit
} from '@angular/core';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-WebRTC',
  templateUrl: 'WebRTC.page.html',
  styleUrls: ['WebRTC.page.css'],
})
export class WebRTCPage implements AfterViewInit {
  public constraints = {
    video: {
      width : {max : 640},
      height : {max : 480},
      facingMode: "user", // 전면 카메라
      frameRate: { ideal: 10, max: 15 }
    },
    audio: false
  }


  @ViewChild('localVideo') localVideoTag : any


  constructor() {
  }
  
  ngAfterViewInit(){
    if(navigator.mediaDevices != null){
      console.log(this.localVideoTag)
      navigator.mediaDevices.getUserMedia(this.constraints)
      .then(stream => {
        console.log('Adding local stream.');
        console.log(stream)
        let video = this.localVideoTag.nativeElement;
        video.srcObject = stream;
      })
      .catch(e => {
          console.log(e);
          alert('카메라 접근이 허용되지 않았습니다.');
      });
    }
  }

  initWebRTCPage(){
    if(navigator.mediaDevices != null){
      console.log(this.localVideoTag)
      navigator.mediaDevices.getUserMedia(this.constraints)
      .then(this.gotStream)
      .catch(function(e) {
          console.log(e);
          alert('카메라 접근이 허용되지 않았습니다@');
      });
    }
  }

  gotStream(stream){
    let video = this.localVideoTag.nativeElement;
    console.log('Adding local stream.');
    console.log(video)
    console.log(stream)
    video.srcObject = stream;
  }

}
