require 'spec_helper'

describe "Exhibits" do
  let(:user) { FactoryGirl.create(:user) }

  before(:each) do
    sign_in(user)
  end

  subject { page }

  describe "exhibits" do
    before { visit  admin_exhibits_path }
    it { should have_content('Exhibits list') }
  end

  describe "New exhibit" do
    before { visit new_admin_exhibit_path }

    it { should have_content('New exhibit')}
  end

end
