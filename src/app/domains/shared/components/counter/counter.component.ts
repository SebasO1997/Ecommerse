import { Component, Input, signal, SimpleChanges } from '@angular/core';
import { ProductComponent } from "../../../products/components/product/product.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [ProductComponent,CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  @Input({required:true}) duration:number = 0 ;
  @Input({required:true}) message:string = '' ;
  counter = signal(0);

  constructor(){
    // before render
    // NOASYNC
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes:SimpleChanges){
    //before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if(duration && duration.currentValue !== duration.previousValue){
      this.doSomething();
    }else{
      console.log('no changes');
    }
  }

  ngOnInit(){
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration => ', this.duration);
    console.log('message => ', this.message);

  }

  ngAfterViewInit(){
    console.log('ngAfterView');
    console.log('-'.repeat(10));
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }

  doSomething(){
    console.log('change duration');
  }

}
