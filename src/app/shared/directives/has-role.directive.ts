import { AuthService } from '@services/auth.service';
import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  OnInit,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHasRole]',
  standalone: true,
})
export class HasRoleDirective implements OnInit {
  @Input() appHasRole: string | string[] = '';
  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const connectedUserRoles = this.authService.connectedUserRoles() as string;
    if (this.appHasRole.includes(connectedUserRoles)) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
