import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user.interface';
import { Role } from '../../models';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit {
  public usersList: User[] = [];

  public roles = [
    {
      name: Role.CUSTOMER,
    },
    {
      name: Role.ADMIN,
    },
  ];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsersList().subscribe((user) => {
      this.usersList = user;
    });
  }

  filterBy(role: string): User[] {
    const originalList = [...this.usersList];

    switch (role) {
      case 'customer':
        const customersList = originalList.filter(
          (user) => user.role === 'customer'
        );

        return customersList;

      case 'admin':
        const adminList = originalList.filter((user) => user.role === 'admin');
        return adminList;

      case 'all':
        return this.usersList;

      default:
        return [];
    }
  }

  filterByV2(role: string) {
    this.usersList = this.usersList.filter((user) => user.role === role);
  }
}
