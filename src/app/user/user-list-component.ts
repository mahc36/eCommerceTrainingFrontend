import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { IUser } from './user';

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit{

    constructor(private userService: UserService) { }

    errorMessage: string;
    pageTitle: string = "User List component";
    showImage = false;

    _listFilter = '';
    filteredUsers: IUser[] = [];
    users: IUser[] = [];

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredUsers = this.listFilter ? this.performFilter(this.listFilter) : this.users;
    }

    performFilter(filterBy: string): IUser[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.users.filter((user: IUser) =>
          user.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
      }

    ngOnInit(): void {
        this.userService.getUsers().subscribe({
            next: users => {
                this.users = users;
                this.filteredUsers = this.users;
            },
            error: err => this.errorMessage = err
          });
    }
}