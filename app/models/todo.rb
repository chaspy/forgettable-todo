class Todo < ApplicationRecord
  belongs_to :user

  def list_valid_todos(current_user)
    # Valid TODO
    # 1. Own TODO
    # 2. It is NOT finished
    # 3. Within 8 days(691200 seconds) after being created
    self.user_id == current_user.id && !self.finished && Time.zone.now - self.created_at < 691200
  end
end
