const { expect, describe, it } = require('@jest/globals');
const zodiacSign = require('./main');

describe('zodiacSign function test', () => {
  it('should not return null', () => {
    expect(zodiacSign(1, 'Januari')).not.toBeNull();
    expect(zodiacSign(1, 'Februari')).not.toBeNull();
    expect(zodiacSign(1, 'Maret')).not.toBeNull();
    expect(zodiacSign(1, 'April')).not.toBeNull();
    expect(zodiacSign(1, 'Mei')).not.toBeNull();
    expect(zodiacSign(1, 'Juni')).not.toBeNull();
    expect(zodiacSign(1, 'Juli')).not.toBeNull();
    expect(zodiacSign(1, 'Agustus')).not.toBeNull();
    expect(zodiacSign(1, 'September')).not.toBeNull();
    expect(zodiacSign(1, 'Oktober')).not.toBeNull();
    expect(zodiacSign(1, 'November')).not.toBeNull();
    expect(zodiacSign(1, 'Desember')).not.toBeNull();
  });

  describe('when date is invalid', () => {
    it('should return "Input tanggal salah"', () => {
      expect(zodiacSign(0, 'Januari')).toBe('Input tanggal salah');
      expect(zodiacSign(32, 'Januari')).toBe('Input tanggal salah');
      expect(zodiacSign(1, 'Januari')).not.toBe('Input tanggal salah');

      expect(zodiacSign(0, 'Februari')).toBe('Input tanggal salah');
      expect(zodiacSign(30, 'Februari')).toBe('Input tanggal salah');
      expect(zodiacSign(1, 'Februari')).not.toBe('Input tanggal salah');
      expect(zodiacSign(29, 'Februari')).not.toBe('Input tanggal salah');
    });
  });

  describe('when Month is valid', () => {
    it('should return "Nama bulan salah', () => {
      expect(zodiacSign(1, 'Januari')).not.toBe('Nama bulan salah');
      expect(zodiacSign(1, 'Februari')).not.toBe('Nama bulan salah');
      expect(zodiacSign(1, 'Maret')).not.toBe('Nama bulan salah');
      expect(zodiacSign(1, 'April')).not.toBe('Nama bulan salah');
      expect(zodiacSign(1, 'Mei')).not.toBe('Nama bulan salah');
      expect(zodiacSign(1, 'Juni')).not.toBe('Nama bulan salah');
      expect(zodiacSign(1, 'Juli')).not.toBe('Nama bulan salah');
      expect(zodiacSign(1, 'Agustus')).not.toBe('Nama bulan salah');
      expect(zodiacSign(1, 'September')).not.toBe('Nama bulan salah');
      expect(zodiacSign(1, 'Oktober')).not.toBe('Nama bulan salah');
      expect(zodiacSign(1, 'November')).not.toBe('Nama bulan salah');
      expect(zodiacSign(1, 'Desember')).not.toBe('Nama bulan salah');

      expect(zodiacSign(1, 'januari')).toBe('Nama bulan salah');
      expect(zodiacSign(1, 'februari')).toBe('Nama bulan salah');
      expect(zodiacSign(1, 'maret')).toBe('Nama bulan salah');
      expect(zodiacSign(1, 'april')).toBe('Nama bulan salah');
      expect(zodiacSign(1, 'mei')).toBe('Nama bulan salah');
      expect(zodiacSign(1, 'juni')).toBe('Nama bulan salah');
      expect(zodiacSign(1, 'juli')).toBe('Nama bulan salah');
      expect(zodiacSign(1, 'agustus')).toBe('Nama bulan salah');
      expect(zodiacSign(1, 'september')).toBe('Nama bulan salah');
      expect(zodiacSign(1, 'oktober')).toBe('Nama bulan salah');
      expect(zodiacSign(1, 'november')).toBe('Nama bulan salah');
      expect(zodiacSign(1, 'desember')).toBe('Nama bulan salah');

      expect(zodiacSign(1, 'Jan')).toBe('Nama bulan salah');
      expect(zodiacSign(1, 'Feb')).toBe('Nama bulan salah');
      expect(zodiacSign(1, 'Mar')).toBe('Nama bulan salah');
      expect(zodiacSign(1, 'Apr')).toBe('Nama bulan salah');
      expect(zodiacSign(1, 'Mei123')).toBe('Nama bulan salah');
      expect(zodiacSign(1, 'Jun')).toBe('Nama bulan salah');
      expect(zodiacSign(1, 'Jul')).toBe('Nama bulan salah');
      expect(zodiacSign(1, 'Agu')).toBe('Nama bulan salah');
      expect(zodiacSign(1, 'Sep')).toBe('Nama bulan salah');
      expect(zodiacSign(1, 'Okt')).toBe('Nama bulan salah');
      expect(zodiacSign(1, 'Nov')).toBe('Nama bulan salah');
      expect(zodiacSign(1, 'Des')).toBe('Nama bulan salah');

      expect(zodiacSign(1, 'Januari123')).toBe('Nama bulan salah');
      expect(zodiacSign(1, 'Februari123')).toBe('Nama bulan salah');
      expect(zodiacSign(1, 'Maret123')).toBe('Nama bulan salah');
      expect(zodiacSign(1, 'April123')).toBe('Nama bulan salah');
      expect(zodiacSign(1, 'Mei123')).toBe('Nama bulan salah');
    });
  });

  describe('when date and month is valid', () => {
    describe('Check Capricorn', () => {
      describe('month is January and date in range 1 - 19', () => {
        it('should return "Capricorn"', () => {
          expect(zodiacSign(1, 'Januari')).toBe('Capricorn');
          expect(zodiacSign(12, 'Januari')).toBe('Capricorn');
          expect(zodiacSign(19, 'Januari')).toBe('Capricorn');
        });
      });
      describe('month is December and date in range 22 - 31', () => {
        it('should return "Capricorn"', () => {
          expect(zodiacSign(22, 'Desember')).toBe('Capricorn');
          expect(zodiacSign(30, 'Desember')).toBe('Capricorn');
        });
      });
    });

    describe('Check Aquarius', () => {
      describe('month is January and date in range 20 - 31', () => {
        it('should return "Aquarius"', () => {
          expect(zodiacSign(20, 'Januari')).toBe('Aquarius');
          expect(zodiacSign(31, 'Januari')).toBe('Aquarius');
        });
      });
      describe('month is February and date in range 1 - 18', () => {
        it('should return "Aquarius"', () => {
          expect(zodiacSign(1, 'Februari')).toBe('Aquarius');
          expect(zodiacSign(18, 'Februari')).toBe('Aquarius');
        });
      });
    });

    describe('Check Pisces', () => {
      describe('month is February and date in range 19 - 29', () => {
        it('should return "Pisces"', () => {
          expect(zodiacSign(19, 'Februari')).toBe('Pisces');
          expect(zodiacSign(29, 'Februari')).toBe('Pisces');
        });
      });
      describe('month is March and date in range 1 - 20', () => {
        it('should return "Pisces"', () => {
          expect(zodiacSign(1, 'Maret')).toBe('Pisces');
          expect(zodiacSign(20, 'Maret')).toBe('Pisces');
        });
      });
    });

    describe('Check Aries', () => {
      describe('month is March and date in range 21 - 31', () => {
        it('should return "Aries"', () => {
          expect(zodiacSign(21, 'Maret')).toBe('Aries');
          expect(zodiacSign(31, 'Maret')).toBe('Aries');
        });
      });
      describe('month is April and date in range 1 - 19', () => {
        it('should return "Aries"', () => {
          expect(zodiacSign(1, 'April')).toBe('Aries');
          expect(zodiacSign(19, 'April')).toBe('Aries');
        });
      });
    });

    describe('Check Taurus', () => {
      describe('month is April and date in range 20 - 30', () => {
        it('should return "Taurus"', () => {
          expect(zodiacSign(20, 'April')).toBe('Taurus');
          expect(zodiacSign(30, 'April')).toBe('Taurus');
        });
      });
      describe('month is May and date in range 1 - 20', () => {
        it('should return "Taurus"', () => {
          expect(zodiacSign(1, 'Mei')).toBe('Taurus');
          expect(zodiacSign(20, 'Mei')).toBe('Taurus');
        });
      });
    });

    describe('Check Gemini', () => {
      describe('month is May and date in range 21 - 31', () => {
        it('should return "Gemini"', () => {
          expect(zodiacSign(21, 'Mei')).toBe('Gemini');
          expect(zodiacSign(31, 'Mei')).toBe('Gemini');
        });
      });
      describe('month is June and date in range 1 - 20', () => {
        it('should return "Gemini"', () => {
          expect(zodiacSign(1, 'Juni')).toBe('Gemini');
          expect(zodiacSign(20, 'Juni')).toBe('Gemini');
        });
      });
    });

    describe('Check Cancer', () => {
      describe('month is June and date in range 21 - 30', () => {
        it('should return "Cancer"', () => {
          expect(zodiacSign(21, 'Juni')).toBe('Cancer');
          expect(zodiacSign(30, 'Juni')).toBe('Cancer');
        });
      });
      describe('month is July and date in range 1 - 22', () => {
        it('should return "Cancer"', () => {
          expect(zodiacSign(1, 'Juli')).toBe('Cancer');
          expect(zodiacSign(22, 'Juli')).toBe('Cancer');
        });
      });
    });

    describe('Check Leo', () => {
      describe('month is July and date in range 23 - 31', () => {
        it('should return "Leo"', () => {
          expect(zodiacSign(23, 'Juli')).toBe('Leo');
          expect(zodiacSign(31, 'Juli')).toBe('Leo');
        });
      });
      describe('month is August and date in range 1 - 22', () => {
        it('should return "Leo"', () => {
          expect(zodiacSign(1, 'Agustus')).toBe('Leo');
          expect(zodiacSign(22, 'Agustus')).toBe('Leo');
        });
      });
    });

    describe('Check Virgo', () => {
      describe('month is August and date in range 23 - 31', () => {
        it('should return "Virgo"', () => {
          expect(zodiacSign(23, 'Agustus')).toBe('Virgo');
          expect(zodiacSign(31, 'Agustus')).toBe('Virgo');
        });
      });
      describe('month is September and date in range 1 - 22', () => {
        it('should return "Virgo"', () => {
          expect(zodiacSign(1, 'September')).toBe('Virgo');
          expect(zodiacSign(22, 'September')).toBe('Virgo');
        });
      });
    });

    describe('Check Libra', () => {
      describe('month is September and date in range 23 - 30', () => {
        it('should return "Libra"', () => {
          expect(zodiacSign(23, 'September')).toBe('Libra');
          expect(zodiacSign(30, 'September')).toBe('Libra');
        });
      });
      describe('month is October and date in range 1 - 22', () => {
        it('should return "Libra"', () => {
          expect(zodiacSign(1, 'Oktober')).toBe('Libra');
          expect(zodiacSign(22, 'Oktober')).toBe('Libra');
        });
      });
    });

    describe('Check Scorpio', () => {
      describe('month is October and date in range 23 - 31', () => {
        it('should return "Scorpio"', () => {
          expect(zodiacSign(23, 'Oktober')).toBe('Scorpio');
          expect(zodiacSign(31, 'Oktober')).toBe('Scorpio');
        });
      });
      describe('month is November and date in range 1 - 21', () => {
        it('should return "Scorpio"', () => {
          expect(zodiacSign(1, 'November')).toBe('Scorpio');
          expect(zodiacSign(21, 'November')).toBe('Scorpio');
        });
      });
    });

    describe('Check Sagittarius', () => {
      describe('month is November and date in range 22 - 30', () => {
        it('should return "Sagittarius"', () => {
          expect(zodiacSign(22, 'November')).toBe('Sagittarius');
          expect(zodiacSign(30, 'November')).toBe('Sagittarius');
        });
      });
      describe('month is December and date in range 1 - 21', () => {
        it('should return "Sagittarius"', () => {
          expect(zodiacSign(1, 'Desember')).toBe('Sagittarius');
          expect(zodiacSign(21, 'Desember')).toBe('Sagittarius');
        });
      });
    });
  });
});
