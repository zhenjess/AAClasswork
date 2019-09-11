require_relative "employee"

class Manager < Employee

  attr_reader :employees
  def initialize
    @employees = [] 
    super
  end
  
  def add_employee(person) 
    if self.name == person.boss
      @employees << person
    end
    @employees
  end
require "byebug"
  def bonus(multiplier)
    total = 0
    debugger
    @employees.each do |employee|
      total += employee.salary
    end
    return total * multiplier
    super
  end
  
end

carl = Employee.new("carl", 10, "cashier", "fred")
josh = Employee.new("josh", 20, "cashier", "fred")
fred = Manager.new("fred", 12, "manager", nil)
fred.add_employee(carl)
fred.add_employee(josh)
p carl.bonus(10)
p fred.bonus(10)
