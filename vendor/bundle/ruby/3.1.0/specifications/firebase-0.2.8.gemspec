# -*- encoding: utf-8 -*-
# stub: firebase 0.2.8 ruby lib

Gem::Specification.new do |s|
  s.name = "firebase".freeze
  s.version = "0.2.8"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Oscar Del Ben".freeze, "Vincent Woo".freeze]
  s.date = "2018-01-28"
  s.description = "Firebase wrapper for Ruby".freeze
  s.email = "info@oscardelben.com".freeze
  s.extra_rdoc_files = ["CHANGELOG.md".freeze, "LICENSE.txt".freeze, "README.md".freeze]
  s.files = ["CHANGELOG.md".freeze, "LICENSE.txt".freeze, "README.md".freeze]
  s.homepage = "http://github.com/oscardelben/firebase-ruby".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.4.9".freeze
  s.summary = "Firebase wrapper for Ruby".freeze

  s.installed_by_version = "3.4.9" if s.respond_to? :installed_by_version

  s.specification_version = 4

  s.add_runtime_dependency(%q<httpclient>.freeze, [">= 2.5.3"])
  s.add_runtime_dependency(%q<json>.freeze, [">= 0"])
  s.add_runtime_dependency(%q<googleauth>.freeze, [">= 0"])
  s.add_development_dependency(%q<rake>.freeze, [">= 0"])
  s.add_development_dependency(%q<rdoc>.freeze, [">= 0"])
  s.add_development_dependency(%q<rspec>.freeze, [">= 0"])
end
