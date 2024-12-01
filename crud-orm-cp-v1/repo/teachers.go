package repo

import (
	"a21hc3NpZ25tZW50/model"

	"gorm.io/gorm"
)

type TeacherRepo struct {
	db *gorm.DB
}

func NewTeacherRepo(db *gorm.DB) TeacherRepo {
	return TeacherRepo{db}
}

func (t TeacherRepo) Save(data model.Teacher) error {
	if err := t.db.Create(&data).Error; err != nil {
		return err
	}
	return nil
}

func (t TeacherRepo) Query() ([]model.Teacher, error) {
	result := []model.Teacher{}
	rows, err := t.db.Table("teachers").Select("*").Rows()
	if err != nil {
		return []model.Teacher{}, err
	}

	defer rows.Close()

	for rows.Next() {
		err := t.db.ScanRows(rows, &result)
		if err != nil {
			return []model.Teacher{}, err
		}
	}

	return result, nil
}

func (t TeacherRepo) Update(id uint, name string) error {
	if err := t.db.Model(&model.Teacher{}).Where("id=?", id).Update("name", name).Error; err != nil {
		return err
	}
	return nil
}

func (t TeacherRepo) Delete(id uint) error {
	t.db.Delete(&model.Teacher{}, id)
	return nil
}
