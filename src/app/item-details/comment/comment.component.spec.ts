import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CommentComponent } from './comment.component';
import { Comment } from '../../shared/models/comment';

describe('CommentComponent', () => {
  let fixture: ComponentFixture<CommentComponent>;

  const comment: Comment = {
    id: 1,
    level: 0,
    user: 'pg',
    time: 0,
    time_ago: '1 hour ago',
    content: '<p>Hello <i>world</i></p>',
    deleted: false,
    comments: [],
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CommentComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentComponent);
    fixture.componentInstance.comment = comment;
    fixture.detectChanges();
  });

  it('renders the comment author and HTML content', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.meta a').textContent).toContain('pg');
    expect(el.querySelector('.comment-text i').textContent).toBe('world');
  });

  it('toggles collapse when the collapse control is clicked', () => {
    const el: HTMLElement = fixture.nativeElement;
    (el.querySelector('.collapse') as HTMLElement).click();
    fixture.detectChanges();
    expect(fixture.componentInstance.collapse).toBe(true);
    expect(el.querySelector('.meta-collapse')).not.toBeNull();
  });
});
