import { TestBed } from '@angular/core/testing';
import { log } from 'util';
import {CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('Calculator Service', () => {

  let calculatorServive: CalculatorService;
  let loggerSpy: LoggerService;


  beforeEach(()=> {
    loggerSpy = jasmine.createSpyObj('LoggerService',['log']);

    TestBed.configureTestingModule({
      providers: [
        calculatorServive,
        {provide: LoggerService, useValue: loggerSpy}
      ]
    });

  });

  it('should add the numbers', () => {

    const res = calculatorServive.add(2,2);
    expect(res).toBe(4);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract the numbers', () => {
    const res = calculatorServive.subtract(2,2);
    expect(res).toBe(0);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
});
