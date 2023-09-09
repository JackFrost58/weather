import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.scss']
})
export class SettingsModalComponent implements OnInit {
	public TAB_CONFIG = [
		{
			labelEn: 'Profile',
			labelRus: 'Профиль',
		},
		{
			labelEn: 'Notification',
			labelRus: 'Уведомления',
		},
		{
			labelEn: 'Apperance',
			labelRus: 'Внешний вид',
		},
		{
			labelEn: 'Account',
			labelRus: 'Аккаугт',
		},
	]


  constructor(
    public dialogRef: MatDialogRef<SettingsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log(this.data)
	}

  public closeModal(): void {
    this.dialogRef.close();
  }

  public saveSettings(): void {

  }
}
