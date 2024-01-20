import { FizeSizePipe } from './fize-size.pipe';

describe('FizeSizePipe', () => {
  const pipe = new FizeSizePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('Isolate FileSizePipe test', () => {
    it('should convert bytes to megabytes', () => {
      expect(pipe.transform(123456789)).toBe('117.74MB');
      expect(pipe.transform(987654321)).toBe('941.90MB');
    });

    it('should use the default extension when not supplied', () => {
      expect(pipe.transform(123456789)).toBe('117.74MB');
      expect(pipe.transform(987654321)).toBe('941.90MB');
    });

    it('should override the extension when supplied', () => {
      expect(pipe.transform(123456789, 'myExt')).toBe('117.74myExt');
      expect(pipe.transform(987654321, 'anotherExt')).toBe('941.90anotherExt');
    });
  });
});
