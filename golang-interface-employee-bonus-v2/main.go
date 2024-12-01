package main

import "fmt"

type Employee interface {
	GetBonus() float64
}

type Junior struct {
	Name         string
	BaseSalary   int
	WorkingMonth int
}

type Senior struct {
	Name            string
	BaseSalary      int
	WorkingMonth    int
	PerformanceRate float64
}

type Manager struct {
	Name             string
	BaseSalary       int
	WorkingMonth     int
	PerformanceRate  float64
	BonusManagerRate float64
}

func (j Junior) GetBonus() float64 {
	var prorataLamaKerja float64 = 1.0

	if j.WorkingMonth < 12 {
		prorataLamaKerja = float64(j.WorkingMonth) / 12
	}

	return 1 * float64(j.BaseSalary) * float64(prorataLamaKerja)
}

func (s Senior) GetBonus() float64 {
	var prorataLamaKerja float64 = 1.0

	if s.WorkingMonth < 12 {
		prorataLamaKerja = float64(s.WorkingMonth) / 12
	}

	return (2 * float64(s.BaseSalary) * float64(prorataLamaKerja)) + (s.PerformanceRate * float64(s.BaseSalary))
}

func (m Manager) GetBonus() float64 {
	var prorataLamaKerja float64 = 1.0

	if m.WorkingMonth < 12 {
		prorataLamaKerja = float64(m.WorkingMonth) / 12
	}

	return (2 * float64(m.BaseSalary) * float64(prorataLamaKerja)) + (m.PerformanceRate * float64(m.BaseSalary)) + (m.BonusManagerRate * float64(m.BaseSalary))
}

func EmployeeBonus(employee Employee) float64 {
	return employee.GetBonus()
}

func TotalEmployeeBonus(employees []Employee) float64 {
	total := 0

	if len(employees) == 0 {
		return float64(total)
	}

	for _, employee := range employees {
		total += int(employee.GetBonus())
		println(total)
	}
	return float64(total)
}

func main() {
	// junior := Junior{Name: "Junior 1", BaseSalary: 100000, WorkingMonth: 12}
	// fmt.Println("Junior Bonus: ", junior.GetBonus())

	// senior := Senior{Name: "Senior 1", BaseSalary: 100000, WorkingMonth: 12, PerformanceRate: 0.5}
	// fmt.Println("Junior Bonus: ", senior.GetBonus())

	// manager := Manager{Name: "Manager 1", BaseSalary: 100000, WorkingMonth: 12, PerformanceRate: 0.5, BonusManagerRate: 0.5}
	// fmt.Println("Junior Bonus: ", manager.GetBonus())

	fmt.Println(TotalEmployeeBonus([]Employee{
		Junior{
			Name:         "Junior",
			BaseSalary:   100000,
			WorkingMonth: 12,
		},
		Junior{
			Name:         "Junior 2",
			BaseSalary:   120000,
			WorkingMonth: 4,
		},
		Junior{
			Name:         "Junior 3",
			BaseSalary:   150000,
			WorkingMonth: 10,
		},
		Junior{
			Name:         "Junior 4",
			BaseSalary:   120000,
			WorkingMonth: 10,
		},
		Junior{
			Name:         "Junior 5",
			BaseSalary:   130000,
			WorkingMonth: 6,
		},
	}))

}
